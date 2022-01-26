import React,{useState} from "react";
import { toast } from 'react-toastify';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const option = [
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:5},
    {value:6},
    {value:7},
    {value:8},
    {value:9},
    {value:10},
]

const serverOption = [
    {value:'people'},
    {value:'planets'},
    {value:'starships'}
]

export const Async = () => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [server,setServer] = useState('people')

    const fetchApi = async (e) => {
        setPage(e.target.value)
        const newData = await axios(`https://swapi.dev/api/${server}/${e.target.value}/`)
        .catch((e)=>{
            toast('Swapi глючи')
            setLoading(false)
            setData(null)
        })
        setData(newData.data)
        setLoading(false)
        toast.success(`Страница ${page}, Вкладка ${server}`)
    }

    const html = () => {
        if(data === null)return 
        const obj = {
            'planets':(
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <span>Имя:{data.name}</span>
                <span>Климат:{data.climate}</span>
                <span>Поверхность:{data.terrain}</span>
            </div>
            ),
            'people':(
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <span>Имя:{data.name}</span>
                <span>Пол:{data.gender}</span>
            </div>
            ),
            'starships':(
             <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <span>Имя:{data.name}</span>
                <span>Модель:{data.model}</span>
                <span>Цена:{data.cost_in_credits}</span>
            </div>
            )

        }
        return obj[server]||null
    }

    return(
        <div style={{marginTop:'50px'}}>
            <div>
                <span>Options</span>
                <select value ={server} onChange={(e)=>{setServer(e.target.value);setData(null)}}>
                    {
                        serverOption.map((el)=>{
                            return (
                                <option key={el.value}>{el.value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <span>Page Number </span>
                <select value ={page} onChange={(e)=>{fetchApi(e);setLoading(true)}}>
                    {
                        option.map((el)=>{
                            return (
                                <option key={el.value}>{el.value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                {
                data === null ?
                loading === true ?
                    <CircularProgress color="success" />
                    :
                    null
                :
                loading === true ?
                    <CircularProgress color="success" />
                    :
                    html()
                }
            </div>
        </div>
    )
}
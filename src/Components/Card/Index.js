import React, {useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Card from './Card'
import './Card.css'
const datas = [
//    {
//         id:1,
//         title:'Samsung Galaxy S23 Ultra 12/256 GB Qaymoq rang ',
//         img:"https://olcha.uz/image/220x220/products/sBHRjcvRttJyjpaPBwJiVnno0GyDnfF5top1dOUuUbCufnEbTL8XEh56aI8a.jpg",
//         price:'14 000 000 som',
//         sale:'1 137 000 som',
//     },
    {
        id:2,
        title:'Smartfon Xiaomi Redmi Note 11S 128GB 8 GB Grafit kulrang ',
        img:"https://olcha.uz/image/220x220/products/2022-02-02/smartfon-xiaomi-redmi-note-11s-128gb-8-gb-grafitovo-seryy-35066-0.png",
        price:'3 000 000 som',
        sale:'405 000 som',

    },
    {
        id:3,
        title:'Samsung Galaxy A33 5G 6/128GB Qora ',
        img:"https://olcha.uz/image/220x220/products/2022-04-08/samsung-galaxy-a33-5g-6128gb-chernyy-45548-0.jpeg",
        price:'3 845 000 som',
        sale:'520 000 som   ',
    },
    {
        id:4,
        title:'Apple iPhone 14 Pro Max 128GB Gold ',
        img:"https://olcha.uz/image/220x220/products/2022-09-08/apple-iphone-14-pro-makh-128gb-gold-115998-0.jpeg",
        price:'17 320 000 som',
        sale:'1 637 000 som',
    },
    {
        id:5,
        title:'Samsung Galaxy S23 Ultra Qora 12/256 GB ',
        img:"https://olcha.uz/image/220x220/products/3zWvpOgUjmKLAK23FDqE4dIEuVucEBCi84Du5fKJEZuBMIWBAoerOmqgUtZf.jpg",
        price:'14 140 000 som',
        sale:'1 337 000 som',
    },
    {
        id:6,
        title:'Huawei nova Y61 4/64 GB Yarim tun qora   ',
        img:"https://olcha.uz/image/220x220/products/2022-12-12/huawei-nova-y61-464-gb-polunochnyy-chernyy-181593-0.jpeg",
        price:'2 200 000 som',
        sale:"440 000 so'm",
    },
    {
        id:7,
        title:'Oppo Reno 7 (8+128) Plastik Sariq Rangda',
        img:"https://olcha.uz/image/220x220/products/2022-12-21/oppo-reno-7-8128-184086-0.jpeg",
        price:'3  589  000 som',
        sale:'485 000 som',
    },
    {
        id:8,
        title:'Nokia 2720 DS TA-1175 Qora Rangda ',
        img:"https://olcha.uz/image/220x220/products/CC0m0XRmHmIQ1IoIFXGd5DhksjAFmex9VpzbaQwOKAKfWLjbDAXN1aoxd1aT.jpeg",
        price:'350 000 som',
        sale:'48 000 som',
    },
    {
        id:9,
        title:'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Grafit kulrang ',
        img:"https://olcha.uz/image/220x220/products/2022-02-01/smartfon-xiaomi-redmi-note-11-6-gb-128gb-grafitovo-seryy-35049-0.jpeg",
        price:'3 160 000 som',
        sale:'427 000 som',
    },
    {
        id:10,
        title:'Gaz plita Artel Milagro 01-K Chu White ',
        img:"https://olcha.uz/image/220x220/products/2021-11-05/gazovaya-plita-artel-milagro-01-k-chu-white-26632-0.jpeg",
        price:'2 747 000 som',
        sale:'371 000 som',
    },
    {
        id:11,
        title:'Xolodilnik Biryusa M108 ',
        img:"https://olcha.uz/image/220x220/products/khD4Sc4Gxgc8aBYRq6Y4USp5K8YZKrkLdZGCWCqxycMXbkTkprDE8G3WIuBN.jpg",
        price:'2  567  820 som',
        sale:'347 000 som',
    },
    {
        id:12,
        title:'Changyutgich Samsung VC20M2520JP ',
        img:"https://olcha.uz/image/220x220/products/2018-06-26/pylesos-samsung-vc20m2520jp-3900-0.jpg",
        price:'1  625  000 som',
        sale:'220  000 som',
    },
    {
        id:13,
        title:'',
        img:"",
        price:'',
        sale:'',
    },
    {
        id:14,
        title:'',
        img:"",
        price:'',
        sale:'',
    },
    {
        id:15,
        title:'',
        img:"",
        price:'',
        sale:'',
    },
]
export default function Index() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(responce=>setData(responce));
    },[])
    console.log('data product',data)
    return(<>
    <Row style={{padding:'0',margin:'0'}}>
        {datas.slice(0,8).map((item,index)=>{
            return(
                <Col lg={3} xl={3}>
        <Card text={item.title} cost={item.price} img={item.img} btn={item.sale}/>
        </Col>
            )
        })}
    </Row>
    </>)
}

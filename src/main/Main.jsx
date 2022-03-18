import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Card from './contant/Card';
import MacImg from './mainImg/Mac.jpg'
import phone from './mainImg/phone.jpg'
import skooter from './mainImg/scooter.jpg'
import tv from './mainImg/tv.jpg'
import mask from './mainImg/mask.jpg'
import machine from './mainImg/machine.jpg'
import freech from './mainImg/freech.jpg'
import colonka from './mainImg/colonka.jpg'
import buds from './mainImg/buds.jpg'
const Main = () => {
    return (
        <main>
            <section className='mainSection'>
                    <Sidebar />
                <div className='mainContant'>
                    
                        <Card img={MacImg} price='97000 ₽' oldPlice='10000 ₽' name='MacBook'/>
                        <Card img={phone} price='35999 ₽' name='Galaxy'/>
                        <Card img={skooter} price='58950 ₽' oldPlice='65500 ₽' name='Скутер'/>
                    
                    
                        <Card img={tv} price='12000 ₽' name='Телвизор Samsung' />
                        <Card img={mask} price='500 ₽' name='Маска' />
                        <Card img={machine} price='75000 ₽' oldPlice='10000 ₽' name='Стиральная машина' />
                  
                        <Card img={freech} price='21550 ₽' oldPlice='43100 ₽' name='Холодильник' />
                        <Card img={colonka} price='3000 ₽' name='Колонка' />
                        <Card img={buds} price='1275 ₽' oldPlice='1500 ₽' name='Наушники' />
                    
                </div>
            </section>
        </main>
    );
};

export default Main;
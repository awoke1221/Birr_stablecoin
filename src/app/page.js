import Image from 'next/image'
import bgImg from '../../public/Bg.jpg'

export default function Home() {
  return (
    <div className='relative h-screen'>
        <div className='absolute -z-10 inset-0'>
            <Image
                src={bgImg}
                alt='background'
                fill
                style={{ objectFit: 'cover' }}
            />
           <div className='absolute inset-0 bg-gradient-to-r from-slate-900'/>
        </div>
        <div className='pt-48 flex justify-center items-center'>
            <h1 className='text-white text-6xl'>
                <h1> Stable Coin </h1>
                <p>Token name </p>
            </h1>

        </div>

    </div>
  )
}

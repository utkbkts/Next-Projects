import Karakterler from '@/app/components/Karakterler'
import Bolum from '@/app/components/bolum'
import Link from 'next/link'
import React, { Suspense } from 'react'



const page = ({params}) => {
    const id = params.id
  return (
    <div className='card'>
        <Link href="/bolumler">
            Bölümlere Geri Dön
        </Link>
        <Bolum id={id}/>
        <Suspense fallback={<div>karakterler yükleniyor</div>}>
        <Karakterler id={id}/>
        </Suspense>
    </div>
  )
}

export default page
import Link from 'next/link';
import React from 'react'

async function getbolumkarakterler(id){
    await new Promise(res=>setTimeout(res,2000))
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    const bolum = await response.json();
    return bolum.characters
}
const Karakterler =async ({id}) => {

    const karakterler = await getbolumkarakterler(id)

  return (
<>
<h3>Bölüm Karakterleri</h3>
    <ul className='karakter'>
        {karakterler.map(k=>(
            <li key={k}>
                <Link href="/karakterler">{k}</Link>
            </li>
        ))}
    </ul>
</>  )
}

export default Karakterler
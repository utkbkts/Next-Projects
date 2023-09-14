import {NextResponse} from "next/server"


export async function GET(request){
   const {searchParams} =new URL(request.url)
   const page = searchParams.get("page")
    const res = await fetch("https://rickandmortyapi.com/api/character?page="+page)
    const karakterler=await res.json()

    return NextResponse.json(karakterler,{
        status:200
    })
}
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import {SignInData} from '@/app/signin/page'


export async function POST(req: Request){

    const body: SignInData = await req.json()
    const {Mail, Password} = body
   
    const user = await prisma.user.findUnique({
        where: {Mail}
    })

    if(!user){
        return NextResponse.json({error: 'Email not found' }, { status:404})
    }
    const IsPasswordCorrect: boolean = await bcrypt.compare(Password, user.password)

    if(IsPasswordCorrect){
        return NextResponse.json({
            message: 'Signed in succesfully',
            userId: user.id
        })
    }else{
        return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }
    
}
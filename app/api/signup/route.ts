import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import {SignUpData} from '@/app/signup/page'

export async function POST(req: Request){

    const body: SignUpData = await req.json()
    const { firstName, lastName, mail, password, confirmPassword} = body

    if(!firstName || !lastName || !mail || !password || !confirmPassword){
        return NextResponse.json({error: 'All fiels are required'}, { status: 400 })
    }

    if(password != confirmPassword){
        return NextResponse.json({error: 'Passwords do not match'}, { status: 400})
    }

    const existing = await prisma.user.findUnique({
        where: { Mail: mail}
    })

    if (existing) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            Mail: mail,
            display_name: `${firstName} ${lastName}`,
            password: hashedPassword,
        }
    })

    return NextResponse.json({ message: 'Account created succesfully '}, { status: 201})
}
import { NextApiRequest } from "next";


export async function GET( req : NextApiRequest ){ 


    return new Response( "Hello" , {
                                     status  : 200 ,
                                     headers : { 'Set-Cookie': `134234` }
                                    }) 

}

export async function POST( req : NextApiRequest ){ 


    const search = req.body.search ;


}

export async function DELETE( req : NextApiRequest ){ }

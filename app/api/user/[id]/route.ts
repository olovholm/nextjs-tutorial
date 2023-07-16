import { usersRepo } from '../../../../helpers/userRepo';

import {NextRequest, NextResponse} from "next/server"


export async function GET(request: NextRequest) {
    console.log(request.url.)
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}

/*
function handler(req: Request, res: Response) {
    console.log(req)
    switch (req.method) {
        case 'GET':
            return getUserById();
        case 'PUT':
            return updateUser();
        case 'DELETE':
            return deleteUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUserById(): Response {

    }

    function updateUser() {
        try {
            usersRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteUser() {
        usersRepo.delete(req.query.id);
        return res.status(200).json({});
    }
}
*/

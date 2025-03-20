import { Webhook } from "svix";
import connectDB from "@/config/db";
import User from "@/config/models/User";
import { headers } from "next/headers";

export async function POST(req){
    const wh = new Webhook(process.env.SIGNING_SECRET)
    const headerPayload = await headers()
    const svixHeaders = {
        "svix_id": headerPayload.get("svix_id"),
        "svix_signature": headerPayload.get("svix_signature"),
    };

    // Get the payload and varify it

    const payload = await req.json();
    const body = JSON.stringify(payload);
    const {data, type} = wh.verify(body, svixHeaders)

    // Prepare the user data to be saved in the database

    const userData = {
        _id: data.id,
        email: data.email_addresses[0].email_addresses,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
    }

    await connectDB();

    switch (type) {
        case value:

        break;

        default:
            break;
    }
}
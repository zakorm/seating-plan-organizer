"use server";
import { redirect } from 'next/navigation';
import { getDb } from "@/lib/mongodb";
import { cookies } from "next/headers";


export async function addUser(formData: FormData) {
  const username = formData.get("username");
  const db = await getDb();
  const users = db.collection("users");
  const existing = await users.findOne({ username:  username});
  if (existing) {
    return;
  }
  await users.insertOne({
    username: username,
    password: formData.get("password"),
  });
  const cookieStore = await cookies();
  if (typeof username == "string") {
    cookieStore.set("username", username, { httpOnly: true });
    redirect("/dashboard");
  }

  
}
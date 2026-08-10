"use server";
import { redirect } from 'next/navigation';
import { getDb } from "@/lib/mongodb";
import { cookies } from "next/headers";


export async function loginUser(formData: FormData) {
  const username = formData.get("username");
  const db = await getDb();
  const users = db.collection("users");
  const ppl = await users.findOne({ username: formData.get("username"), password: formData.get("password")});
  const cookieStore = await cookies();
  if (ppl) {
    if (typeof username == "string") {
      cookieStore.set("username", username, { httpOnly: true });
    }
    redirect("/dashboard");
  }
}
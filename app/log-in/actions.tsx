"use server";
import { redirect } from 'next/navigation';
import { getDb } from "@/lib/mongodb";


export async function loginUser(formData: FormData) {
  const db = await getDb();
  const users = db.collection("users");
  const ppl = await users.findOne({ username: formData.get("username"), password: formData.get("password")});
  if (ppl) {
    redirect("/dashboard");
  }
}
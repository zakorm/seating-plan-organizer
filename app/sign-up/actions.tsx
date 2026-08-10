"use server";
import { redirect } from 'next/navigation';
import { getDb } from "@/lib/mongodb";


export async function addUser(formData: FormData) {
  const db = await getDb();
  const users = db.collection("users");
  const existing = await users.findOne({ username: formData.get("username") });
  if (existing) {
    return;
  }
  await users.insertOne({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  redirect("/dashboard");
}
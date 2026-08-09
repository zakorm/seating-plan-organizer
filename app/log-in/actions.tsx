"use server";

import { getDb } from "@/lib/mongodb";


export async function searchUser(formData: FormData) {
  const db = await getDb();
  const users = db.collection("users");
  const ppl = users.findOne({ username: formData.get("username"), password: formData.get("password")});
  if (!ppl) {
    return {success: false};
  } else {
    return {success:true};
  }
}
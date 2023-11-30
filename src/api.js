import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAbgbXTzWI5AAKhRNplAp6XdFArH9Tdu-g",
  authDomain: "vanlife-64a2d.firebaseapp.com",
  projectId: "vanlife-64a2d",
  storageBucket: "vanlife-64a2d.appspot.com",
  messagingSenderId: "972158680420",
  appId: "1:972158680420:web:87a28d7c220cf7784a0e71"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
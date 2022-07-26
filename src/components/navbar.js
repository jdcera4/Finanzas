import React from "react";
import { useAuth } from "../context/AuthContext";

export function NavBar() {
    const { logout } = useAuth();

    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(error.message);
      }
    };
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" class="flex items-center">
         <h1 style={{color: 'black'}}>Finanzas</h1>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

import React from "react";

export function CardProduct({name}){

  const rol = {wGQEkEluD5PfI6g3LJkoloYNCCn2: 'fidelizado', q41ns1SElgP8z7HWxI0BfLs83S33: 'normal'}

    return (
        <a href="/google" class="flex font-sans rounded-lg border border-gray-200 shadow-md bg-white" style={{margin: '10px auto', width: '90%'}}>
        <form class="p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              {name}
            </h1>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
        </form>
      </a>
    )
}
import Todo from "@/components/todo";

export default function Home() {

  



  return (
    <>
      <form className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-20 px-2 mx-auto">
        <input type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
        <textarea name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full"></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
      </form>
      

<div className="relative overflow-x-auto sm:rounded-lg">
    <table className="w-[80%] mt-20 mx-auto text-sm text-left rtl:text-right text-gray-900 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    TITLE
                </th>
                <th scope="col" className="px-6 py-3">
                    DESCRIPTION
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
          <Todo/>
           
        </tbody>
    </table>
</div>

    </>
  );
}

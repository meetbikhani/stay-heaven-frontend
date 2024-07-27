import React from 'react'

const AdminHotels = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className='font-bold text-lg'>
              <th>S.No.</th>
              <th className='text-center'>Hotel Name</th>
              <th className='text-center'>Owner</th>
              <th className='text-center'>Price</th>
              <th className='text-center'>City</th>
              <th className='text-center'>State</th>
              <th className='text-center'>Status</th>
              <th className='text-center'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className='text-center'>The Grand Hotel</td>
              <td className='text-center'>John Doe</td>
              <td className='text-center'>$100</td>
              <td className='text-center'>New York</td>
              <td className='text-center'>NY</td>
              <td className='text-center'>
                <select className='select select-ghost select-sm'>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </td>
              <td className='text-center flex justify-center '>
                <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>More</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                  </div>
                </dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminHotels
import React from 'react';
import '../Design/Seven.css';

const Seven = () => {
  return (
    <div>
        <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
        <h4>Component Configuration List</h4>
        <h3>Welcome Khushboo</h3>
         <div className="placed">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
         </div>
       </div>


         <div className='second'>
        <label className='hii'> MU NUMBER</label>
        <input type="text" className='hlo'  placeholder='HD12123145_12' />
        
         
         </div>


         <div className="toks">
         <button className='tik3'><b>CLEAR</b></button>
        <button className='tik4'><b>Print pick List</b></button>
         
         </div>
         <div className='tok6'>
                <div>
                    <label htmlFor="">Transform Order Number</label> <br />
                    <input type="text"  />
                </div>
                <div>
                <label htmlFor="">Transform Order Status</label> <br />
                    <input type="text"  />
                </div>
                <div>
                <label htmlFor="">To Start Date And Time</label> <br />
                    <input type="text"  />
                </div>
                <div>
                <label htmlFor="">Ship To Country</label> <br />
                    <input type="text"  />
                </div>
                <div>
                <label htmlFor="">Transformation Site</label> <br />
                    <input type="text"  />
                </div>
                <div>
                <label htmlFor=""> Work Station</label> <br />
                    <select name="" id=""> 
                    <option value="">choose..........</option>
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">*A4 Printer</label> <br />
                    <select name="" id="" > 
                    <option value="">choose..........</option>
                    <option value=""></option>
                    <option value=""></option>
                    </select>

                </div>
                <div>
                <label htmlFor="">*Label Printer</label> <br />
                    <select name="" id=""> 
                    <option value="">choose..........</option>
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                </div>
         </div>

         <div className="tok7">
        <div>
            <label htmlFor="">Verify Line Clearance</label> <br />
            <input type="radio" />

        </div>
        <div>
                <label htmlFor="">*Material Number/GTIN</label> <br />
                <input type="text" />


        </div>
        <div>  
            <label htmlFor="">*Batch No/Serial No </label> <br />
            <input type="text" />
             </div>
         </div>


         <div className='tok8'>
            Work Order Details
         </div>


        <div className="tok9">
            <table>
                <thead>
                    <tr>
                        <th>Work order Number</th>
                        <th>Work order Status</th>
                        <th>Work order Quantity</th>
                        <th>Material Number</th>
                        <th>GTIN</th>
                        <th>Variant/Mode Code</th>
                        <th>Batch Number</th>
                        <th> Uom</th>
                        <th>Comments</th>
                        <th>Master Data Error...</th>
                        <th>Re-Read</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>1235689</td>
                            <td>CREATED</td>
                            <td>1</td>
                            <td>4567-123</td>
                            <td>
                                <input type="number" placeholder='123456789' />
                            </td>
                            <td>12</td>
                            <td>BATCHHH</td>
                            <td>EA</td>
                            <td>MDM CHECK SUCCESS</td>
                            <td>N/A</td>
                            <td></td>
                        </tr>
                    </tbody>


            </table>
        </div>




    </div>
        


   
  )
}

export default Seven;
import React from 'react';
import restaurants from '../sample-restaurants';




class Langing extends React.Component {
   render() {
      return <div className='restaurant_select'>
         <div className='restaurant_select_top'>
            <div className='restaurant_select_top_header font-effect-outline'>
               Выбери ресторан
            </div>
            <div className='arrow_picker'>
            </div>
            <div className='arrow_picker-up'>
            </div>
            <div className='arrow_picker-down'>
            </div>
            <div className='restaurant_select-button'>
               <ul>
                  {
                     restaurants.map(restaurant => {
                        return <li key={restaurant.id}> {restaurant.title}</li>
                     })
                  }
               </ul>
            </div>
         </div>
         <button>
            Перейти в ресторан
         </button>
      </div>




   }
}

export default Langing;
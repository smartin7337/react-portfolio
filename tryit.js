import React from 'react';
import Image from 'react-image-resizer';
import cur from './cat.jpg';

function Tryit() {

    return (
      <div>
        <Image
          img src={cur} alt="cat" class="center"
          height={350}
          width={700}
        />
      </div>
    );

}

export default Tryit;
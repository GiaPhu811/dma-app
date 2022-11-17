/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';

// import Iframe from 'react-iframe';
// import { AUTHORIZATION_KEY, AXIOS_CONFIGS, Storage } from 'aesirx-dma-lib';
import { AesirXDam } from 'aesirx-dam-app';

import 'aesirx-dam-app/dist/index.css';
import 'aesirx-dam-app/dist/index.css.map';
import { useState } from 'react';

function DigitalAssetsPage() {
  const [show, setShow] = useState(true);
  console.log(setShow);
  // const urlDam =
  //   AXIOS_CONFIGS.BASE_ENDPOINT_URL +
  //   '/administrator/index.php?option=com_aesir_dam&view=collection_assets&token=' +
  //   Storage.getItem(AUTHORIZATION_KEY.TOKEN_USER);
  return (
    <div className="py-4 px-3 h-100 flex-direction-column">
      <div className="h-100 flex-1">
        <AesirXDam show={show} onHide={() => {}} onShow={() => {}} />
      </div>
    </div>
  );
}

export default DigitalAssetsPage;

import React from "react";

import { StyledSelect, Caption } from "./NumberSelect.Styles";
import MenuItem from "@material-ui/core/MenuItem";
import * as Flex from "@twilio/flex-ui";

// It is recommended to keep components stateless and use redux for managing states

// names = {
  
//   '+17312022600': 'The Kidney Experts',
//   '+17207039680': 'Western Nephrology',
//   '+14698091098': 'Dallas Renal Group',
//   '+14052884181': 'Dallas Renal Lawton',
//   '+19182198072': 'Tulsa CardioVascular',
//   '+15802034030': 'Oklahoma Heart Hospital',
//   '+18172415127': 'Dr. Lee',
//   '+16207401025': 'Allied Natoinal',
//   '+18555182872': 'Kings Hawaiian',
//   '+18889102872': 'Cura Main',
//   '+15124099903': 'ONI Austin',
//   '+14054071025': 'ONI Meeker',
//   '+19184011002': 'ONI Tulsa' 
// }

const NumberSelect = (props) => {
  console.log('FlexgetInstance',Flex.Manager.getInstance())
  let callerIds = Flex.Manager.getInstance().workerClient.attributes.callerIds;
  console.log(callerIds, 'CALLERIDS')
  
  return (
    <div>
      <Caption
        key="queue-select-caption"
        className="Twilio-OutboundDialerPanel-QueueSelect-Caption"
      >
        Caller Id
      </Caption>
      <StyledSelect
        value={props.phoneNumber || callerIds[0]}
        onChange={(e) => props.updateNumber(e.target.value)}
      >
        <MenuItem key="placeholder" value="placeholder" disabled>
          Caller Id
        </MenuItem>
        {callerIds.map((element) => (
          <MenuItem key={element} value={element}>
           {element}  
          </MenuItem>
        ))}
      </StyledSelect>
    </div>
  );
};

export default NumberSelect;

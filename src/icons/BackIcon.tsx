import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../constant/color';

type Props = {
  color?: string;
};

const BackIcon = ({color}: Props) => {
  return (
    <View>
      <Svg width="24" height="12" viewBox="0 0 24 12" fill="none">
        <Path
          d="M0.274969 5.14889C0.275249 5.14861 0.275484 5.14828 0.275812 5.148L5.17444 0.272997C5.54142 -0.0922062 6.135 -0.0908471 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.602L3.20822 4.875H23.0625C23.5803 4.875 24 5.29471 24 5.8125C24 6.33028 23.5803 6.75 23.0625 6.75H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7172 5.17439 11.352L0.275764 6.477C0.275484 6.47671 0.275249 6.47639 0.274921 6.47611C-0.0922508 6.10964 -0.0910778 5.51414 0.274969 5.14889Z"
          fill={color ?? COLORS.BLACK}
        />
      </Svg>
    </View>
  );
};

export default BackIcon;

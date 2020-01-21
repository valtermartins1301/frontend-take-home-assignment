import React from "react";

function Baby(props) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 25 40" {...props}>
      <path
        d="M12.5 0C19.404 0 25 5.756 25 12.857v14.286C24.98 34.236 19.396 39.98 12.5 40 5.604 39.98.02 34.236 0 27.143V12.857C0 5.757 5.596 0 12.5 0zm1.64 25.723a1.72 1.72 0 00-1.57.763 1.72 1.72 0 00-1.571-.763 1.738 1.738 0 00-1.427 1.018 1.83 1.83 0 00.143 1.78l1.39 2.143c.323.485.858.774 1.43.774.571 0 1.106-.29 1.43-.774l1.39-2.143h.069a1.83 1.83 0 00.143-1.78 1.738 1.738 0 00-1.427-1.018zm1.457-20.83a.23.23 0 00-.218.028.245.245 0 00-.101.2c-.004 1.107-.875 2.004-1.952 2.008h-1.618c-1.076-.004-1.947-.9-1.951-2.008l-.007-.058a.243.243 0 00-.094-.142.23.23 0 00-.219-.028c-3.714 1.52-5.856 5.539-5.104 9.577.752 4.039 4.187 6.959 8.184 6.959 3.998 0 7.433-2.92 8.185-6.959.752-4.038-1.39-8.057-5.105-9.577zm-1.486 10.85a.683.683 0 01.69-.23.705.705 0 01.513.527.727.727 0 01-.224.71 3.595 3.595 0 01-5.173 0 .737.737 0 01.043-.97.68.68 0 01.943-.037c.886.91 2.322.91 3.208 0zm-6.958-3.714c.66-.65 1.7-.65 2.36 0a.727.727 0 01.224.71.705.705 0 01-.512.527.683.683 0 01-.69-.23.235.235 0 00-.198-.11.235.235 0 00-.198.11.7.7 0 01-.697.23.705.705 0 01-.513-.528.727.727 0 01.224-.71zm8.333 0c.66-.65 1.7-.65 2.361 0a.727.727 0 01.224.71.705.705 0 01-.513.527.683.683 0 01-.69-.23.235.235 0 00-.198-.11.235.235 0 00-.198.11.7.7 0 01-.697.23.705.705 0 01-.512-.528.727.727 0 01.223-.71z"
        fill="#657786"
        fillRule="evenodd"
      />
    </svg>
  );
}

export { Baby };

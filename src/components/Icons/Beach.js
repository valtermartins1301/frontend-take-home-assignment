import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  width: string,
  height: string
};

const Beach = ({ width = '4em', height = '4em', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 37" {...props}>
      <path
        d="M35.217 32.398c1.033 0 1.997.408 2.716 1.148l1.804 1.857a.93.93 0 11-1.335 1.296l-1.804-1.857a1.91 1.91 0 00-1.381-.584 1.91 1.91 0 00-1.381.584l-.982 1.01A3.756 3.756 0 0130.138 37a3.756 3.756 0 01-2.716-1.148l-.981-1.01a1.91 1.91 0 00-1.381-.584 1.91 1.91 0 00-1.381.584l-.982 1.01A3.755 3.755 0 0119.982 37a3.756 3.756 0 01-2.717-1.148l-.98-1.01a1.91 1.91 0 00-1.382-.584 1.91 1.91 0 00-1.381.584l-.981 1.01A3.755 3.755 0 019.825 37a3.756 3.756 0 01-2.716-1.148l-.981-1.01a1.91 1.91 0 00-1.382-.584 1.91 1.91 0 00-1.38.584l-1.762 1.85a.93.93 0 01-1.348-1.281l1.768-1.858a3.76 3.76 0 012.723-1.155c1.032 0 1.996.408 2.716 1.148l.98 1.01a1.91 1.91 0 001.382.584 1.91 1.91 0 001.381-.584l.982-1.01a3.756 3.756 0 012.716-1.148c1.032 0 1.997.408 2.715 1.148l.982 1.01a1.91 1.91 0 001.381.584 1.91 1.91 0 001.381-.584l.981-1.01a3.756 3.756 0 012.716-1.148c1.033 0 1.997.408 2.716 1.148l.981 1.01a1.91 1.91 0 001.382.584 1.91 1.91 0 001.381-.584l.981-1.01a3.756 3.756 0 012.716-1.148zM20.753 1.097a12.3 12.3 0 016.497 6.898.922.922 0 01.058.336v.04a.923.923 0 01-.02.156l-.011.039a.913.913 0 01-.04.117l-.019.043a.917.917 0 01-.069.12l-.012.02a.924.924 0 01-.087.106l-.016.014-.037.033a.949.949 0 01-.094.073.94.94 0 01-.187.1l-.006.003-.02.006a.945.945 0 01-.326.053h-.022a.924.924 0 01-.156-.02l-.047-.013c-.02-.005-.04-.009-.058-.015-3.183-1.081-3.861.26-4.282 1.364l-.064.172a.93.93 0 01-1.103.576c-1.88-.48-3.25-.412-4.247-.197l-.182.042 4.276 11.268.18-.001a17.72 17.72 0 0114.662 7.7h-.104c-1.377 0-2.67.546-3.627 1.531l-.981 1.01a.64.64 0 01-.47.2.64.64 0 01-.47-.2l-.982-1.01a5.026 5.026 0 00-3.627-1.532c-1.377 0-2.67.547-3.627 1.532l-.981 1.01a.64.64 0 01-.47.2.64.64 0 01-.47-.2l-.981-1.01a5.026 5.026 0 00-3.627-1.532c-1.377 0-2.67.547-3.628 1.532l-.981 1.01a.64.64 0 01-.47.2.64.64 0 01-.47-.2l-.981-1.01a5.023 5.023 0 00-2.468-1.399 17.7 17.7 0 0112.26-7.66l.368-.048-4.07-10.732c-.92.485-2.057 1.347-3.213 3.054a.93.93 0 01-1.207.3c-1.064-.567-2.52-1.342-4.272 1.731l-.035.052-.023.035-.048.06-.053.057-.077.066-.053.038c-.011.008-.023.017-.035.024a.928.928 0 01-.144.072l-.01.005-.027.008-.056.017-.057.014-.042.009-.074.01-.074.003h-.037l-.036-.003-.035-.005a.823.823 0 01-.135-.026l-.056-.017-.037-.014-.035-.015-.052-.024-.066-.038-.05-.032-.058-.046-.024-.02-.023-.02-.05-.054c-.014-.015-.028-.03-.04-.047l-.025-.033-.022-.035-.03-.045a.961.961 0 01-.059-.126 12.297 12.297 0 01.286-9.471 12.299 12.299 0 016.9-6.495 12.307 12.307 0 019.473.286zM9.724 3.706a10.45 10.45 0 00-3.832 4.803l-.052.136-.06.158-.056.159-.05.148c-.038.115-.074.23-.108.345l-.032.108c-.042.15-.08.3-.116.452l-.023.108a10 10 0 00-.15.833l-.02.14a10.524 10.524 0 00-.074.926 18.5 18.5 0 00-.004.312v.162a10.726 10.726 0 00.018.51l.006.11.019.232.024.231.014.107.024.179.027.18.026.152.028.14c1.424-1.552 2.869-1.677 3.976-1.436-1.09-3.966-.464-7.088.415-9.195zm2.381-1.214l-.165.058c-.055.021-.108.045-.162.066-1.061 1.683-2.533 5.131-1.163 10.019 1.173-1.394 2.48-2.342 4.039-2.933 1.558-.59 3.165-.749 4.968-.483-2.218-4.566-5.606-6.171-7.517-6.727zm2.26-.546c2.056.995 4.595 2.916 6.41 6.607.67-.916 1.834-1.78 3.929-1.563l-.039-.065c-.121-.2-.247-.397-.38-.588-.017-.025-.036-.048-.053-.072-.123-.173-.252-.341-.385-.505l-.099-.122c-.148-.177-.3-.35-.46-.516l-.093-.095-.219-.216-.224-.21-.1-.09c-.172-.154-.351-.3-.534-.442l-.125-.093c-.17-.128-.344-.251-.523-.369-.026-.016-.05-.034-.075-.05-.198-.127-.4-.247-.608-.362l-.147-.08a10.454 10.454 0 00-6.275-1.17z"
        fill="#657786"
        fillRule="evenodd"
      />
    </svg>
  );
};

Beach.propTypes = propTypes;

export { Beach };

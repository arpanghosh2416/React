import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from "./themeSlice";

function Theme() {
  const dispatch = useDispatch();
  const { color } = useSelector(state => state.theme);
  console.log("Theme.js: color:", color);

  const NoRepeat = useMemo(() => {
    return (
      <div className="">
        {console.log("REPEATATION")}
      </div>
    );
  }, []);

  return (
    <div style={{ color: color }}>
      {NoRepeat}
      <input type="text" value={color} onChange={e => dispatch(changeColor(e.target.value))} />
    </div>
  );
}

export default Theme;

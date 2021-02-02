import React, { useState, useEffect, useRef, Component } from 'react';


export default function useInterval(callback, delay) {
  const savedCallback = useRef();
  const [ tickDelay, setTickDelay ] = useState(delay);

  function setDelay( newDelay ) {
    setTickDelay(newDelay);
  };

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (tickDelay !== null) {
      let id = setInterval(tick, tickDelay);
      return () => clearInterval(id);
    }
  }, [tickDelay]);

  return setTickDelay;
}
// Modules
import axios from 'axios';
import React, { SetStateAction } from 'react';

export class Api {
  destination;
  initialState;
  setState;
  setLoader;
  middleware = (data) => data;
  /**
   *
   * @param {string} destionation
   * @param {any} initialState
   * @param {React.Dispatch<SetStateAction<any>>} setState
   * @param {React.Dispatch<SetStateAction<any>> | null} setLoader
   * @param {() => any} middleware
   */

  constructor(destionation, initialState, setState, setLoader, middleware) {
    this.destination = destionation;
    this.initialState = initialState;
    this.setState = setState;
    this.setLoader = setLoader;
    this.middleware = middleware;
  }

  /**
   * @param {boolean} load
   */

  get(load = false) {
    try {
      return axios
        .get(this.destination)
        .then((res) => {
          if (load) {
            this.setLoader(true);
          }
          this.setState(res.data);
        })
        .finally(() => {
          if (load) {
            this.setLoader(false);
          }
        });
    } catch (error) {
      throw new Error('Bad parameters', error);
    }
  }

  /**
   * @param {FormData | Object} data
   * @param {boolean} require
   * @param {boolean} load
   */
  post(data, require = false, load = false) {
    try {
      return axios
        .post(this.destination, data)
        .then((res) => {
          if (load) {
            this.setLoader(true);
          }
          if (require) {
            this.setState(res.data);
          }
        })
        .finally(() => {
          if (load) {
            this.setLoader(false);
          }
        });
    } catch (error) {
      throw new Error('Bad parameters', error);
    }
  }
}

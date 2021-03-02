import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json.data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    })();
  }, [url]);

  return [data, loading, error, setUrl];
};

useDataApi.propTypes = {
  initialUrl: PropTypes.string.isRequired,
  initialData: PropTypes.shape.isRequired,
};

export default useDataApi;

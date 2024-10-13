export const parseDecodedJSON = (json: string) => {
  return JSON.parse(decodeURIComponent(json));
};

export const encodeJSON = (json: object) => {
  return encodeURIComponent(JSON.stringify(json));
};

export const getPayload = (params: {
  encodedJson: boolean;
  payload: string;
}) => {
  let data;
  if (params.encodedJson) {
    data = parseDecodedJSON(params.payload);
  } else {
    data = JSON.parse(params.payload);
  }
  return data;
};

/* eslint-disable no-restricted-globals */
export const computeOffset = (req) => {
  const page = Object.keys(req.query).length ? parseInt(req.query.page, 10) : 1;
  // eslint-disable-next-line
  return ((page <= 0) || (isNaN(page))) ? 1 : page;
};

export const computeTotalPages = (data, limit) => Math.ceil(data.length / limit);

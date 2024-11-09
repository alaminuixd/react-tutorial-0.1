function CkObj(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}
export default CkObj;

import useFetch from "./index";

export default function UseFetchHookTest() {
  const { data, errMsg, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(pending, data, errMsg);

  return (
    <div>
      <h1>use fetch hook</h1>
      {pending ? <h3>Pending! Please Wait</h3> : null}
      {
        errMsg? <h3>{errMsg}</h3> : null
      }
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}

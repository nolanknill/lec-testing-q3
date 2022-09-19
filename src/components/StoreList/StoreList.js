import StoreCard from "../StoreCard/StoreCard";

const StoreList = ({ stores, sale, loadData }) => {
    return (
        <div className={sale ? "sale" : ""}>
            <h2>Store List</h2>

            {stores.map((item) => (
                <StoreCard key={item.id} address={item.address} />
            ))}

            <button onClick={loadData}>load more stores</button>
        </div>
    );
}

export default StoreList;
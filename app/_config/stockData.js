const apikey = process.env.NEXT_PUBLIC_STOCK_API_KEY;

export const fetchStockData = async (symbol)=>{
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${apikey}`);
    const data = await response.json();
    return data;
}
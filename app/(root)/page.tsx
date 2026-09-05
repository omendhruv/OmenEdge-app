import TradingViewWidget from "@/components/TradingviewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG
} from "@/lib/constants";

const Home = () => {

    const scriptURL ='https://s3.tradingview.com/external-embedding/embed-widget-'

    return (
        <div className="flex flex-col min-h-screen w-full gap-8 text-gray-400">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <div className="lg:col-span-1 xl:col-span-1">
                    <TradingViewWidget
                        title="Market Overview"
                        scriptURL={`${scriptURL}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        height={600}
                        className="custom-chart"
                    />
                </div>
                <div className="lg-col-span xl:col-span-2">
                    <TradingViewWidget
                        title="Stock Heatmap"
                        scriptURL={`${scriptURL}stock-heatmap.js`}
                        config={HEATMAP_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <div className="lg:col-span-1">
                    <TradingViewWidget
                        scriptURL={`${scriptURL}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        height={600}
                        className="custom-chart"
                    />
                </div>
                <div className="h:full md:col-span-1 lg:col-span-2">
                <TradingViewWidget
                    scriptURL={`${scriptURL}market-quotes.js`}
                    config={MARKET_DATA_WIDGET_CONFIG}
                    height={600}
                />
                </div>
            </section>
        </div>
)
}
export default Home





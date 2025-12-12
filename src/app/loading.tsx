export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Skeleton */}
      <div
        className="bg-[#DDDDDD] border border-black mb-6 animate-pulse"
        style={{
          boxShadow: '2px 2px 0 #000000, inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888',
        }}
      >
        <div
          className="h-5 border-b border-black"
          style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)' }}
        />
        <div className="bg-white p-6">
          <div className="h-8 bg-[#EEEEEE] w-64 mx-auto mb-2" />
          <div className="h-4 bg-[#EEEEEE] w-96 mx-auto" />
        </div>
      </div>

      {/* Filter Skeleton */}
      <div
        className="bg-[#DDDDDD] border border-black p-2 mb-4 h-12 animate-pulse"
        style={{ boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888' }}
      />

      {/* Gallery Skeleton */}
      <div
        className="bg-[#DDDDDD] border border-black animate-pulse"
        style={{
          boxShadow: '2px 2px 0 #000000, inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888',
        }}
      >
        <div
          className="h-5 border-b border-black"
          style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)' }}
        />
        <div className="bg-white p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-[#EEEEEE] border border-[#AAAAAA] h-48" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

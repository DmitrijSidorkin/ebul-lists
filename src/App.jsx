import './App.css'

function App() {

  return (
    <>
      <h1 className='page-title'>Ebul Lists</h1>
      <p className='page-subtitle'>Curated music & Eurovision rankings across the decades</p>
      <div className='lists-table'>
        <div className='lists-category'>
          <p className='category-title'>Years Lists</p>
          <div className='lists'>
            <a className='list-link' href="https://2000s-songs.pages.dev/">
              <div className='list'>
                <p className='list-title'>2000s songs</p>
              </div>
            </a>
            <a className='list-link' href="https://90s-songs.pages.dev/">
            <div className='list'>
              <p className='list-title'>90s songs</p>
            </div>
            </a>
            <a className='list-link' href="https://80s-songs.pages.dev/">
            <div className='list'>
              <p className='list-title'>80s songs</p>
            </div>
            </a>
            <a className='list-link' href="https://70s-songs.pages.dev/">
            <div className='list'>
              <p className='list-title'>70s songs</p>
            </div>
            </a>
            <a className='list-link' href="https://00s-60s-songs.pages.dev/">
            <div className='list'>
              <p className='list-title'>00s-60s songs</p>
            </div>
            </a>
          </div>
        </div>
        <div className='lists-category'>
          <p className='category-title'>Eurovision Lists</p>
          <div className='lists'>
            <a className='list-link' href="https://eurovision-2026-list.pages.dev/">
            <div className='list'>
              <p className='list-title'>Eurovision 2026</p>
            </div>
            </a>
            <a className='list-link' href="https://eurovision-2025-list.pages.dev/">
            <div className='list'>
              <p className='list-title'>Eurovision 2025</p>
            </div>
            </a>
            <a className='list-link' href="https://eurovision-2024-list.pages.dev/">
            <div className='list'>
              <p className='list-title'>Eurovision 2024</p>
            </div>
            </a>
          </div>
        </div>
        <div className='lists-category'>
          <p className='category-title'>Other Lists</p>
          <div className='lists'>
            <a className='list-link' href="https://kuki-metal-list.pages.dev/">
              <div className='list'>
                <p className='list-title'>Kuki Metal List 2025</p>
              </div>
            </a>
            <a className='list-link' href="https://kuki-rock-metal-list-2026.pages.dev/">
              <div className='list'>
                <p className='list-title'>Kuki Rock/Metal List 2026</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

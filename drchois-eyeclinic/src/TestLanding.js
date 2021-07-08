import React, { useState } from 'react'
import landingImg from './backgrounds/landing_page.png'
import { Editor } from '@tinymce/tinymce-react'
function TestLanding() {
    const [layout, setLayout] = useState(false)
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflowY: 'scroll',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '500px',
            }}
        >
            <Editor
                apiKey="zrerkincsd8s8qmj0wo5b1hv8jojhprn9rdr9f9w5h3ytx7h"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
      alignleft aligncenter alignright | \
      bullist numlist outdent indent | help',
                }}
            />
            <button
                onClick={() => {
                    setLayout(!layout)
                }}
            >
                change layout
            </button>
            {layout ? (
                <img
                    src={landingImg}
                    alt=""
                    style={{
                        width: '800px',
                    }}
                />
            ) : (
                <img
                    src={landingImg}
                    alt=""
                    style={{
                        width: '100vw',
                    }}
                />
            )}
        </div>
    )
}

export default TestLanding

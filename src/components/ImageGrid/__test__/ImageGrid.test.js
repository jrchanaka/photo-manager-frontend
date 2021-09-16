import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from '../ImageGrid';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

const selectedPhotos = [
    {
        src: "https://placeimg.com/640/640/tech",
        value: "204900031"
    },
    {
        src: "https://placeimg.com/640/640/people",
        value: "204900022"
    }
];

afterEach(cleanup);

it("ImageGrid module should render without a problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ImageGrid />, div);
})

it("ImageGrid module should render correctly", () => {
    const { getByTestId } = render(
        <ImageGrid 
            images={selectedPhotos}
            onSave={ () => {} }
        />
    );
    expect(getByTestId('image-grid')).toBeInTheDocument();
})
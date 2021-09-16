import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../Image';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("Image module should render without a problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Image />, div);
})

it("Image module should render correctly", () => {
    const { getByTestId } = render(
        <Image 
            src="https://placeimg.com/640/640/animals" 
            isSelected={true} 
            height={150}
            width={150}
            onImageClick={ () => {} }
        />
    );
    
    const imgTag = getByTestId('image-picker-image-box-img-tag');
    const checkedTag = getByTestId('image-picker-image-box-check-tag');

    expect(getByTestId('image-picker-image-box')).toBeInTheDocument();
    expect(getByTestId('image-picker-image-box')).toContainElement(imgTag);

    expect(imgTag).toHaveAttribute('src', 'https://placeimg.com/640/640/animals');

    expect(checkedTag).toHaveAttribute('class', 'checked');
})
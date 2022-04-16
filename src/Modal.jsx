import React from "react";

function Modal({ isOpen, close, addMenu }) {
  return (
    <article
      className="modalBackground"
      id="modal"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <form
        className="modal"
        id="addMenuForm"
        onSubmit={(e) => {
          e.preventDefault();

          const data = new FormData(e.target);
          const newMenu = Object.fromEntries(data.entries());
          addMenu(newMenu);

          close();
        }}
      >
        <button
          onClick={close}
          className="modalClose"
          id="closeModal"
          type="button"
        >
          닫기
        </button>
        <label htmlFor="flavor" className="label">
          맛의 이름은?
        </label>
        <input
          id="flavor"
          name="flavor"
          type="text"
          placeholder="민트초코"
          className="input"
          maxLength={10}
          required
        />
        <label htmlFor="image" className="label">
          이미지가 있나요!
        </label>
        <input
          id="image"
          name="image"
          type="text"
          placeholder="URL"
          className="input"
          required
        />
        <label htmlFor="description" className="label">
          맛을 소개해주세요~!
        </label>
        <input
          id="description"
          type="text"
          name="description"
          placeholder="꾸준한 인기!"
          className="input"
          required
          maxLength={10}
        />
        <label htmlFor="alt" className="label">
          이미지를 소개할 수 있는 텍스트를 적어주세요~
        </label>
        <input
          id="alt"
          type="text"
          name="alt"
          placeholder="mint choco"
          className="input"
          maxLength={14}
        />
        <button type="submit" className="submitButton">
          맛 저장하기
        </button>
      </form>
    </article>
  );
}

export default Modal;

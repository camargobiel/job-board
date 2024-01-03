interface ToggleProps {
  toggle: () => void;
}

export const GoToLoginOverlay = ({ toggle }: ToggleProps) => {
  return (
    <section className="flex flex-col justify-center items-center w-96 h-96 bg-red-400">
      <h2>Já possui uma conta?</h2>
      <button
        onClick={toggle}
      >
        Clique aqui para entrar agora!
      </button>
    </section>
  );
};

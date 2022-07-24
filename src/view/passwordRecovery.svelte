<script>
  import { writable } from "svelte/store";
  import { validateUser } from "../store/Auth.js";
  import { onMount } from "svelte";
  import Modal, { bind } from "svelte-simple-modal";
  import PasswordRecoveryModal from "../lib/PasswordRecoveryModal.svelte";
  // @ts-ignore
  const modal = writable(null);
  const handleClose = () => {
    modal.set(null);
  };
  const showModal = () =>
    modal.set(
      bind(PasswordRecoveryModal, {
        message: "",
        route: "",
      })
    );
  showModal();
</script>

<Modal
  closeOnOuterClick={false}
  closeButton={false}
  show={$modal}
  styleWindow={{
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.15 )",
    backgroundColor: "rgb(241, 245, 249)",
  }}
/>

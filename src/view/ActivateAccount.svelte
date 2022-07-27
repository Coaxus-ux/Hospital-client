<script>
  import { writable } from "svelte/store";
  import { validateUser } from "../store/Auth.js";
  import { onMount } from "svelte";
  import Modal, { bind } from "svelte-simple-modal";
  // @ts-ignore
  import Popup from "../lib/Popup.svelte";
  const modal = writable(null);
  export let token;
  const Parameters = writable({
      msg: "",
      route: ""
    });
  onMount(async () => {
    const request = await validateUser(token);
    
    if (request.status) {
      Parameters.set({
        msg: request.msg,
        route: "/login"
      });
    }else{
      Parameters.set({
        msg: request.msg,
        route: "/register"
      });
    }
    const showModal = () =>
        modal.set(
          bind(Popup, {
            message: $Parameters.msg,
            route: $Parameters.route,
          })
        );
        showModal();
  });
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

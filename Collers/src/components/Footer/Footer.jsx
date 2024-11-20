import appStore from "../../assets/AppStore.png";
import playStore from "../../assets/PlayStore.png";
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.bgColor} style={{paddingTop: "5%"}}>
            <div class="container pt-5 mt-5">
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">

                    <div class="col mb-3 w-25">
                        <h5 className="fw-bold">Producs</h5>
                        <ul className={styles.ul}>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Pricing</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Overview</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Browse</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Accessibility</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Five</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3 w-25">
                        <h5 className="fw-bold">Solutions</h5>
                        <ul className={styles.ul}>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Brainstorming</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Ideation</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Wireframing</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Researching</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Design</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3 w-25">
                        <h5 className="fw-bold">Support</h5>
                        <ul className={styles.ul}>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Contact us</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Developers</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Documentation</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Integrations</a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0">Reports</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3 w-25">
                        <h5 className="fw-bold">Get the App</h5>
                        <ul className={styles.ul}>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0"><img src={appStore} alt="appStore" className="w-50"/></a></li>
                            <li class="nav-item mb-2"><a href="#" class="text-white link-underline link-underline-opacity-0"><img src={playStore} alt="playStore" className="w-50"/></a></li>
                        </ul>
                        <h5 className="fw-bold">Follow us</h5>
                        <ul className={`${styles.ul} d-flex`}>
                            <li class="nav-item m-2"><a href="#" class="text-white link-underline link-underline-opacity-0 h5"><i class="bi bi-youtube"></i></a></li>
                            <li class="nav-item m-2"><a href="#" class="text-white link-underline link-underline-opacity-0 h5"><i class="bi bi-facebook"></i></a></li>
                            <li class="nav-item m-2"><a href="#" class="text-white link-underline link-underline-opacity-0 h5"><i class="bi bi-twitter"></i></a></li>
                            <li class="nav-item m-2"><a href="#" class="text-white link-underline link-underline-opacity-0 h5"><i class="bi bi-instagram"></i></a></li>
                            <li class="nav-item m-2"><a href="#" class="text-white link-underline link-underline-opacity-0 h5"><i class="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>

            <div class="b-example-divider container"></div>

            <div class="container d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>Collers @ 2023. All rights reserved.</p>
                <ul className={`${styles.ul} d-flex`}>
                    <li class="ms-3"><a class="text-white link-underline link-underline-opacity-0" href="#">Terms</a></li>
                    <li class="ms-3"><a class="text-white link-underline link-underline-opacity-0" href="#">Privacy</a></li>
                    <li class="ms-3"><a class="text-white link-underline link-underline-opacity-0" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

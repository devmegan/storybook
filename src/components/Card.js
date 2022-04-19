export default function Card({post, index}){
    return (
    <div class="card w-full bg-base-100 shadow-xl">
                    <picture><img src={post.src} alt="Shoes" className="rounded-right-clip" /></picture>
                    <div class="card-body">
                        <h2 class="card-title">
                        {post.header}
                        {index === 0 && <div class="badge badge-secondary">NEW</div>}
                        </h2>
                        <p>{post.para}</p>
                        <div class="card-actions">
                            {post.tags[0] && <div class="badge badge-outline">{post.tags[0]}</div>}
                            {post.tags[1] && <div class="badge badge-outline">{post.tags[1]}</div>}
                        </div>
                    </div>
                    </div>
    )
}